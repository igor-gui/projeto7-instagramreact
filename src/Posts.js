import Post from './Post'


export default function Posts() {

    const posting = [
        {
            userImg: "assets/img/meowed.svg",
            nick: "meowed",
            contentImg: "assets/img/gato-telefone.svg",
            liker: "respondeai",
            likerPhoto: "assets/img/respondeai.svg",
            others: 101.523
        },
        {
            userImg: "assets/img/barked.svg",
            nick: "barked",
            contentImg: "assets/img/dog.svg",
            liker: "adorable_animals",
            likerPhoto: "assets/img/adorable_animals.svg",
            others: 99.159
        }
    ]

    return (
        <div class="posts">
            {posting.map((e) => {
                return (
                    <Post
                userImg={e.userImg}
                nick={e.nick}
                contentImg={e.contentImg}
                liker={e.liker}
                likerPhoto={e.likerPhoto}
                others={e.others}
            />
                )
            })}

        </div>
            
    )
}