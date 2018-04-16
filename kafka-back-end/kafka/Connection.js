var kafka = require('kafka-node');

var topics = [
    {topic: 'login_request', partition: 0},
    {topic: 'signup_request', partition: 0},
    {topic: 'getfiles_request', partition: 0},
    {topic: 'delete_request', partition: 0},
    {topic: 'upload_request', partition: 0},
    {topic: 'getdetails_request', partition: 0},
    {topic: 'createGroup_request', partition: 0},
    {topic: 'deleteGroup_request', partition: 0}
    {topic: 'getGroups_request', partition: 0},
    {topic: 'usernames_request', partition: 0},
];

function ConnectionProvider() {
    this.getConsumer = function(topic_name) {
        if (!this.kafkaConsumerConnection) {

            this.client = new kafka.Client("localhost:2181");
            this.kafkaConsumerConnection = new kafka.Consumer(this.client,[ { topic: topic_name, partition: 0 }]);
            this.client.on('ready', function () { console.log('client ready!') })
        }
        return this.kafkaConsumerConnection;
    };

    //Code will be executed when we start Producer
    this.getProducer = function() {

        if (!this.kafkaProducerConnection) {
            this.client = new kafka.Client("localhost:2181");
            var HighLevelProducer = kafka.HighLevelProducer;
            this.kafkaProducerConnection = new HighLevelProducer(this.client);
            //this.kafkaConnection = new kafka.Producer(this.client);
            console.log('producer ready');
        }
        return this.kafkaProducerConnection;
    };
}
exports = module.exports = new ConnectionProvider;