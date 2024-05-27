 import {ImageAnnotatorClient} from "@google-cloud/vision";

function main() {
  // [START vision_quickstart]
  async function quickstart() {
    try {
      // Creates a client
      const client = new ImageAnnotatorClient();
   
      // Performs label detection on the image file
      const [result] = await client.labelDetection('./resources/test.jpeg');
      const labels = result.labelAnnotations;
      labels.forEach (label => {
        console.log(label.description);
      })
    }catch (error) {
      console.error('Error:', error);
    }
  }
  quickstart();
  // [END vision_quickstart]
}
 
process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
 
main(...process.argv.slice(2));