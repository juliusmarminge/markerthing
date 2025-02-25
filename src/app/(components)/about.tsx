import { remark } from "remark";
import html from "remark-html";
import { Card } from "../(components)/common/card";

// I tried to read this from FS but it was harder than expected in a "worker" 😅
const md = `
## Chop Your Streams In Record Time

Grab csv files from your Twitch [Stream Markers](https://help.twitch.tv/s/article/creating-highlights-and-stream-markers?language=en_US#:~:text=in%20light%20purple.-,Stream%20Markers,-Stream%20Markers%20are) to use with [LosslessCut](https://github.com/mifi/lossless-cut)

### ...why does this exist?

I wanted a better way to manage the markers from my streams. I use them as reference points to grab chunks of video for my editors. This app lets you see all the markers trivially as well as exporting them to a CSV file.

The CSV files exported are designed to be used with [LosslessCut](https://github.com/mifi/lossless-cut), a phenomenal open source video cutting tool. We also included a time offset option to set all the times forward or backward by a chosen number of seconds.

### My workflow:

- Stream on Twitch, record vod + footage on camera
- During stream, create new markers using \`/marker (name of marker)\` command
- End of stream, download CSVs from MarkerThing
  - I make a second offset CSV for my camera footage, since I start recording it after I start the stream
- Open LosslessCut, drag VOD in, drag CSV in, "export"
- ^ again, with camera recordings + offset CSV

This workflow takes me ~3 minutes, and it enables my team to quickly grab 5+ videos worth of content after every stream.

Let me know if this is useful! - [Theo](https://twitter.com/t3dotgg)
`;

export default async function About() {
  const processedContent = await remark().use(html).process(md);

  return (
    <div className="my-auto flex flex-col items-center justify-center">
      <Card>
        <article
          className="prose p-8"
          dangerouslySetInnerHTML={{ __html: processedContent.toString() }}
        />
      </Card>
    </div>
  );
}
