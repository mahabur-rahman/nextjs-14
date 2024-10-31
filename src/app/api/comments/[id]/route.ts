import { comments } from "../data";
import { redirect } from "next/navigation";

// get single comment
export async function GET(
    _request: Request,
    { params }: { params: { id: string } }
  ) {
    const comment = comments.find((comment) => comment.id === parseInt(params.id));
    if (!comment) {
     redirect('/api/comments')
    }
    return Response.json(comment);
  }


// updated 
export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const body = await request.json();
    const { text } = body;
  
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );
    comments[index].text = text;
    return Response.json(comments[index]);
  }

//   delete 
  export async function DELETE(
    _request: Request,
    { params }: { params: { id: string } }
  ) {
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(params.id)
    );
    const deletedComment = comments[index];
    comments.splice(index, 1);
    return Response.json(deletedComment);
  }