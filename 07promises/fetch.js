// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0
async function getGithubInfo(){
    try {
        const res = await fetch('https://api.github.com/users/nageshmali');
        const ans = await res.json();
        console.log(ans);
    } catch (error) {
        console.log(error);
    }
}

getGithubInfo();