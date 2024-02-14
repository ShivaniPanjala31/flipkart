import { Subject } from "rxjs";

const subject = new Subject();

export const MessageService = {
    sendMessage: (data)=>{
        subject.next(data);
    },
    getMessage: ()=>{
        return subject.asObservable();
    }
};