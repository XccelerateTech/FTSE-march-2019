const redis = require('redis');

const client = redis.createClient({
    host: 'localhost', 
    port: 6379,
    auth_pass: 'test123'
});


function scheduleGetJob(){
    setTimeout(getJob, 5000);
}

function getJob(){
    client.rpop('messageQueue', (err, reply)=>{
        if(err){
            console.log(err);
            scheduleGetJob();
            return;
        }

        if(reply === null){
            console.log('No jobs here');
            scheduleGetJob();
            return ;
        }

        const job = JSON.parse(reply);
        // console.log(job)

        console.log('Processing job, msg: ' + job.msg + ' date: ' + job.date); setTimeout(function () {
            console.log('Job Done! Ready for a different job')
            scheduleGetJob();
        }, 10000);
    });
}

scheduleGetJob();

//B