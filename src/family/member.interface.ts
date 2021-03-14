export interface BaseMember {
    fullname: string;
    gender: string;
    relation: string;
    nickname: string;
}

export interface Member extends BaseMember {
    id: number;
}