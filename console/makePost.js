/* eslint-env node */

const fs = require("fs");
const { format } = require("date-fns");
const { promisify } = require("util");

const exists = promisify(fs.exists);
const writeFile = promisify(fs.writeFile);

const template = title => `---
title: ${title}
summary:
---
`;

const sluggify = string =>
  string
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "");

module.exports = function makePost(title) {
  if (!title) {
    return Promise.reject("No title provided");
  }

  const filename = `${format(new Date(), "YYYY-MM-DD")}.${sluggify(title)}.md`;
  const path = `${__dirname}/../src/pages/posts/${filename}`;

  return exists(path).then(exists => {
    if (exists) {
      return Promise.reject("Post already exists");
    }

    return writeFile(path, template(title)).then(
      () => "Post created successfully"
    );
  });
};
