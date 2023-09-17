import React, { useEffect, useRef } from "react";
// This component handles (unsigned) uploads

/* When the script in <Head> inside upload-widget.js (or our main page, typically) loads, we need a way to save a reference to the code that's loaded. Therefore when this component loads we use UseRef and UseEffect to find and save the reference */

const UploadWidget = () => {
  const cloudinaryRef = useRef();

  // When we use the createUploadWidget method (line 20), it returns a reference to the widget
  const widgetRef = useRef();

  // useEffect: When this component renders, we want to save the reference
  useEffect(() => {
    // Save the current value:
    cloudinaryRef.current = window.cloudinary;

    // If you console.log cloudinaryRef.current, you get an object which, from what I understand, basically gives you access to the Cloudinary API.
    // createUploadWidget() on line 20 will create our widget object/frame in memory, but won't display it until we call the open() method (line 37)

    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      /* This first argument is our Cloudinary configuration. You get both of these from the Cloudinary website once you've made an account. I enabled unsigned uploads on the website and renamed the preset. Note: I removed the values below */
      {
        cloudName: "",
        uploadPreset: "",
      },
      /* The second argument is an optional function for event handling. It has two parameters: error, which will either be null if successful, or an error message if there was a failure; and result, which is a JSON object that gives us info on the triggered event (for example, when we successfully upload an image) - See note at bottom */

      function (error, result) {
        // Just logging the result to see what comes out
        console.log(result);
      }
    );
  }, []);

  /* Just a simple button to trigger the widget to open when clicked. It can get a lot more advanced than this I think, with props etc.*/

  return <button onClick={() => widgetRef.current.open()}>Upload file</button>;
};

export default UploadWidget;

/* Note on events: There are various events that get "fired" when the user does something, for example there is an event called abort (when the user aborts an upload), close (they closed the widget), success (something was uploaded successfully), etc. All of these events pass their own info to the result object above */
