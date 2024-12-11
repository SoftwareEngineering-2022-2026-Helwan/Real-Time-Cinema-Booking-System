/*
url: /api/feedback
*/
interface feedback_list_request{

}

interface feedback_list_response{
    feedbacks:feedback[]
}

interface feedback{
    id:number,
    email:string,
    message:string,
}

