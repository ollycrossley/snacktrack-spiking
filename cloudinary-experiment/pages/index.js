import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { CldUploadButton } from "next-cloudinary";
import UploadWidget from "../components/UploadWidget";

/* So the CldUploadButton component seems like an easy way for us to let people
upload files in our app. It uses an instance of the Cloudinary upload widget.
You have to specify your Cloud name in .env

One thing I think is important is if we want signed or unsigned uploads. From what
I can tell signed is more secure. According to the Cloudianry docs, with unsigned uploads "it is possible for a customer to inspect your client-side HTML code to find your cloud name and preset, and use that information to upload unwanted files to your Cloudinary product environment." Probably not what we want
*/

// Check upload-widget-page.js and UploadWidget.js

export default function Home() {
  return (
    <main>
      <h1>Cloudinary test</h1>
      <h2>CldUploadButtton</h2>

      <CldUploadButton uploadPreset="<Upload Preset>" />
      <br />
      <Link href="/upload-widget-page">Upload widget test</Link>
    </main>
  );
}
