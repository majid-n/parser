import { ReplyParser } from "./cheerio-parser";

(async function() {
    const parser = new ReplyParser();
    const result = await parser.parseFromUrl('./XML/SwissGrid.xml', 'SwissGrid');
    console.log(result);
})();

// cheerioParser.parse("content goes here");
