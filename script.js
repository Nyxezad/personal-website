//  let post = {
//     id: '',
//     image: '',
//     title: '',
//     desc: ''
//  };

 let posts = [
    {
        id: 1,
        image:'assets/img1.jpg',
        title: 'Bias from Overconfidence: A Mental Model',
        desc: "We tend to Overestimate our ability to predict the future. People tend to put a higher probability on desired events than undesired events."
    },
    {
        id: 2,
        image:'assets/img2.jpg',
        title: 'An 85-year Harvard study on happiness found the No. 1 retirement challenge that ‘no one talks about’',
        desc: "What makes us happy in life?"
    },
    {
        id: 3,
        image:'assets/img3.jpg',
        title: '7 Secrets the Calmest People Know About Anxiety',
        desc: "Here are some things about ‘anxiety’ I’ve learned that helped me more than any advice from anxious people:"
    },
    {
        id: 4,
        image:'assets/img4.jpg',
        title: 'Words and Phrases to Avoid in a Difficult Conversation',
        desc: "Difficult conversations are difficult for a reason, and when you’re anxious or stressed out, it’s easy to say the wrong thing."
    },
    {
        id: 5,
        image:'assets/img5.jpg',
        title: 'Habits vs Goals: A Look at the Benefits of a Systematic Approach to Life',
        desc: "Goals rely on external motivation. Habits are automatic and literally rewire our brains."
    },
    {
        id: 6,
        image:'assets/img6.jpg',
        title: 'Everyone Communicates, Few Connect',
        desc: '“When you make a commitment, you create hope. When you keep a commitment, you create trust.”'
    }
 ];

 function addPost(title, desc){
    const lastIndex = posts.length - 1;
    const imgIndex = Math.floor(Math.random() * 6) + 1;

    const lastPost = posts[lastIndex];
    const maxId = lastPost.id;

    posts.push({
        id: maxId + 1,
        image:`assets/img${imgIndex}.jpg`, // String interpolation
        title: title,
        desc: desc
    });
 }