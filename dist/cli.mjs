// src/core/popular.ts
var NPM = [
  "acorn",
  "adm-zip",
  "ai",
  "ajv",
  "alpinejs",
  "angular",
  "ansi-styles",
  "apollo-client",
  "apollo-server",
  "archiver",
  "astro",
  "async",
  "autoprefixer",
  "aws-sdk",
  "axios",
  "babel-loader",
  "bcrypt",
  "bcryptjs",
  "better-sqlite3",
  "biome",
  "bl",
  "bluebird",
  "body-parser",
  "bootstrap",
  "boxen",
  "buffer",
  "bunyan",
  "bytes",
  "canvas",
  "chai",
  "chalk",
  "chart.js",
  "cheerio",
  "chokidar",
  "classnames",
  "clsx",
  "color",
  "color-convert",
  "colors",
  "commander",
  "concurrently",
  "cookie-parser",
  "core-js",
  "cors",
  "cross-env",
  "cross-fetch",
  "crypto-js",
  "css-loader",
  "cssnano",
  "csv-parse",
  "cypress",
  "d3",
  "date-fns",
  "dayjs",
  "debug",
  "deepmerge",
  "discord.js",
  "dotenv",
  "drizzle-orm",
  "ejs",
  "electron",
  "electron-builder",
  "elysia",
  "esbuild",
  "escape-html",
  "eslint",
  "eslint-config-prettier",
  "eslint-plugin-import",
  "eslint-plugin-react",
  "event-stream",
  "execa",
  "expo",
  "express",
  "fast-xml-parser",
  "fastify",
  "file-loader",
  "filesize",
  "firebase",
  "firebase-admin",
  "form-data",
  "formik",
  "framer-motion",
  "fs-extra",
  "gatsby",
  "glob",
  "googleapis",
  "got",
  "graceful-fs",
  "graphql",
  "handlebars",
  "hapi",
  "he",
  "helmet",
  "highlight.js",
  "hono",
  "html-webpack-plugin",
  "htmx.org",
  "husky",
  "iconv-lite",
  "immer",
  "inherits",
  "ini",
  "inquirer",
  "ioredis",
  "is-number",
  "is-odd",
  "isomorphic-fetch",
  "jest",
  "jimp",
  "joi",
  "jose",
  "jotai",
  "jquery",
  "js-yaml",
  "jsdom",
  "jsonwebtoken",
  "jszip",
  "kleur",
  "knex",
  "koa",
  "langchain",
  "left-pad",
  "lerna",
  "less",
  "lint-staged",
  "lit",
  "lodash",
  "lodash.debounce",
  "lodash.get",
  "lodash.merge",
  "log4js",
  "loglevel",
  "lru-cache",
  "lucide-react",
  "luxon",
  "markdown-it",
  "marked",
  "mime",
  "mime-types",
  "mini-css-extract-plugin",
  "minimatch",
  "minimist",
  "mkdirp",
  "mobx",
  "mocha",
  "moment",
  "mongodb",
  "mongoose",
  "morgan",
  "ms",
  "msw",
  "multer",
  "mustache",
  "mysql",
  "mysql2",
  "nanoid",
  "nest",
  "next",
  "nock",
  "node-cache",
  "node-fetch",
  "nodemailer",
  "nodemon",
  "npm-run-all",
  "nunjucks",
  "nuxt",
  "nx",
  "object-assign",
  "openai",
  "ora",
  "oxlint",
  "p-limit",
  "p-map",
  "p-queue",
  "papaparse",
  "parcel",
  "passport",
  "pdfkit",
  "pg",
  "picocolors",
  "pify",
  "pino",
  "playwright",
  "pm2",
  "postcss",
  "preact",
  "prettier",
  "pretty-ms",
  "prisma",
  "prismjs",
  "pug",
  "puppeteer",
  "q",
  "qs",
  "query-string",
  "quick-lru",
  "ramda",
  "react",
  "react-dom",
  "react-hook-form",
  "react-native",
  "react-query",
  "react-redux",
  "react-router",
  "react-router-dom",
  "readable-stream",
  "recharts",
  "redis",
  "redux",
  "regenerator-runtime",
  "remix",
  "request",
  "restify",
  "rimraf",
  "rollup",
  "rxjs",
  "safe-buffer",
  "sass",
  "selenium-webdriver",
  "semver",
  "sentry",
  "sequelize",
  "sharp",
  "shelljs",
  "sinon",
  "socket.io",
  "socket.io-client",
  "solid-js",
  "source-map",
  "source-map-support",
  "sqlite3",
  "storybook",
  "string-width",
  "strip-ansi",
  "stripe",
  "style-loader",
  "styled-components",
  "stylelint",
  "superagent",
  "supertest",
  "supports-color",
  "svelte",
  "swr",
  "tailwindcss",
  "tar",
  "telegraf",
  "terser",
  "three",
  "through2",
  "toml",
  "trpc",
  "ts-jest",
  "ts-loader",
  "ts-node",
  "tslib",
  "tsup",
  "tsx",
  "turbo",
  "twilio",
  "typeorm",
  "typescript",
  "uglify-js",
  "unbuild",
  "underscore",
  "undici",
  "unzipper",
  "url-loader",
  "urql",
  "util-deprecate",
  "uuid",
  "validator",
  "vite",
  "vite-plugin-react",
  "vitest",
  "vue",
  "webpack",
  "webpack-cli",
  "webpack-dev-server",
  "winston",
  "wrap-ansi",
  "ws",
  "xlsx",
  "xml2js",
  "yaml",
  "yargs",
  "yauzl",
  "yup",
  "zod",
  "zustand",
  "zx"
];
var PYPI = [
  "aiohttp",
  "alembic",
  "altair",
  "ansible",
  "anthropic",
  "apscheduler",
  "arrow",
  "asyncpg",
  "attrs",
  "autopep8",
  "awscli",
  "azure-identity",
  "azure-storage-blob",
  "backoff",
  "bandit",
  "bcrypt",
  "beautifulsoup4",
  "black",
  "bokeh",
  "boto3",
  "botocore",
  "bottle",
  "build",
  "cachetools",
  "catboost",
  "celery",
  "certifi",
  "chardet",
  "charset-normalizer",
  "click",
  "colorama",
  "confluent-kafka",
  "coverage",
  "cryptography",
  "cython",
  "dash",
  "dask",
  "dataclasses-json",
  "datasets",
  "decorator",
  "decouple",
  "discord.py",
  "diskcache",
  "distlib",
  "django",
  "docker",
  "ecdsa",
  "email-validator",
  "environs",
  "fabric",
  "factory-boy",
  "faker",
  "fastapi",
  "filelock",
  "flake8",
  "flask",
  "gensim",
  "google-api-python-client",
  "google-cloud-storage",
  "gradio",
  "grpcio",
  "gunicorn",
  "hatch",
  "html5lib",
  "httpcore",
  "httpx",
  "huggingface-hub",
  "hypothesis",
  "idna",
  "imageio",
  "importlib-metadata",
  "ipykernel",
  "ipython",
  "isort",
  "itsdangerous",
  "jax",
  "jinja2",
  "joblib",
  "jsonschema",
  "jupyter",
  "jupyterlab",
  "kafka-python",
  "keras",
  "kivy",
  "kubernetes",
  "langchain",
  "lightgbm",
  "loguru",
  "lxml",
  "mako",
  "markupsafe",
  "marshmallow",
  "matplotlib",
  "mock",
  "more-itertools",
  "motor",
  "msgpack",
  "mypy",
  "mysqlclient",
  "nbconvert",
  "networkx",
  "nltk",
  "notebook",
  "nox",
  "numba",
  "numpy",
  "oauthlib",
  "openai",
  "opencv-python",
  "openpyxl",
  "orjson",
  "packaging",
  "pandas",
  "paramiko",
  "passlib",
  "peewee",
  "pendulum",
  "pika",
  "pillow",
  "pip",
  "pipenv",
  "platformdirs",
  "playwright",
  "plotly",
  "ply",
  "poetry",
  "polars",
  "pre-commit",
  "prettytable",
  "protobuf",
  "psutil",
  "psycopg2",
  "psycopg2-binary",
  "pyarrow",
  "pycryptodome",
  "pydantic",
  "pydantic-core",
  "pygame",
  "pyjwt",
  "pylint",
  "pymongo",
  "pymysql",
  "pynacl",
  "pyopenssl",
  "pyparsing",
  "pyqt5",
  "pyramid",
  "pyserial",
  "pytest",
  "pytest-asyncio",
  "pytest-cov",
  "pytest-mock",
  "python-dateutil",
  "python-dotenv",
  "python-multipart",
  "python-telegram-bot",
  "pytz",
  "pyyaml",
  "pyzmq",
  "redis",
  "regex",
  "requests",
  "requests-oauthlib",
  "rich",
  "rsa",
  "ruff",
  "s3transfer",
  "sanic",
  "schedule",
  "scikit-image",
  "scikit-learn",
  "scipy",
  "scrapy",
  "seaborn",
  "selenium",
  "sendgrid",
  "sentence-transformers",
  "sentry-sdk",
  "setuptools",
  "simplejson",
  "six",
  "slack-sdk",
  "spacy",
  "sqlalchemy",
  "starlette",
  "statsmodels",
  "streamlit",
  "stripe",
  "structlog",
  "sympy",
  "tabulate",
  "tenacity",
  "tensorflow",
  "termcolor",
  "thrift",
  "tiktoken",
  "tkinter",
  "tokenizers",
  "toml",
  "tomli",
  "torch",
  "torchvision",
  "tornado",
  "tortoise-orm",
  "tox",
  "tqdm",
  "transformers",
  "tweepy",
  "twilio",
  "twine",
  "typer",
  "typing-extensions",
  "tzdata",
  "ujson",
  "urllib3",
  "uv",
  "uvicorn",
  "virtualenv",
  "watchdog",
  "websocket-client",
  "websockets",
  "werkzeug",
  "wheel",
  "wrapt",
  "xgboost",
  "xlrd",
  "xlsxwriter",
  "yapf",
  "zipp"
];
var CRATES = [
  "actix-web",
  "ahash",
  "anyhow",
  "askama",
  "async-std",
  "async-trait",
  "axum",
  "base64",
  "bat",
  "bevy",
  "bincode",
  "bitflags",
  "bytes",
  "cargo-edit",
  "cargo-watch",
  "cc",
  "cfg-if",
  "chrono",
  "clap",
  "colored",
  "crossbeam",
  "crossterm",
  "csv",
  "dashmap",
  "derive_more",
  "diesel",
  "dirs",
  "either",
  "env_logger",
  "fd-find",
  "futures",
  "glob",
  "handlebars",
  "hashbrown",
  "hex",
  "http",
  "hyper",
  "image",
  "indexmap",
  "indicatif",
  "itertools",
  "js-sys",
  "lazy_static",
  "libc",
  "log",
  "memchr",
  "mongodb",
  "native-tls",
  "nom",
  "num",
  "num-traits",
  "once_cell",
  "openssl",
  "parking_lot",
  "pest",
  "pin-project",
  "proc-macro2",
  "prost",
  "quote",
  "rand",
  "ratatui",
  "rayon",
  "redis",
  "regex",
  "reqwest",
  "ring",
  "ripgrep",
  "rocket",
  "rusqlite",
  "rustls",
  "sea-orm",
  "semver",
  "serde",
  "serde_derive",
  "serde_json",
  "serde_yaml",
  "sha2",
  "smallvec",
  "sqlx",
  "structopt",
  "strum",
  "syn",
  "tauri",
  "tempfile",
  "tera",
  "thiserror",
  "time",
  "tokio",
  "toml",
  "tonic",
  "tower",
  "tracing",
  "url",
  "uuid",
  "walkdir",
  "warp",
  "wasm-bindgen",
  "web-sys",
  "wgpu"
];
var RUBYGEMS = [
  "activerecord",
  "activesupport",
  "aws-sdk",
  "bootsnap",
  "bundler",
  "byebug",
  "capybara",
  "cocoapods",
  "devise",
  "dotenv",
  "factory_bot",
  "faker",
  "faraday",
  "fastlane",
  "httparty",
  "jekyll",
  "json",
  "minitest",
  "mysql2",
  "nokogiri",
  "pg",
  "pry",
  "puma",
  "rack",
  "rails",
  "rake",
  "redis",
  "rspec",
  "rubocop",
  "sass",
  "sidekiq",
  "sinatra",
  "sprockets",
  "sqlite3",
  "stripe",
  "thor",
  "turbo-rails",
  "webpacker",
  "xcpretty"
];
var POPULAR = { npm: NPM, pypi: PYPI, crates: CRATES, rubygems: RUBYGEMS };

// src/core/assess.ts
var DAY = 86400000;
var REGISTRY = { npm: "npm", pypi: "PyPI", crates: "crates.io", rubygems: "RubyGems" };
var ESTABLISHED = 1e5;
var registryName = (ecosystem) => REGISTRY[ecosystem];
var span = (ms) => {
  const steps = [
    [365 * DAY, "year"],
    [30 * DAY, "month"],
    [DAY, "day"],
    [3600000, "hour"]
  ];
  for (const [size, word] of steps) {
    if (ms >= size) {
      const count = Math.floor(ms / size);
      return `${count} ${word}${count === 1 ? "" : "s"}`;
    }
  }
  return "under an hour";
};
var compact = (count) => {
  if (count < 1000) {
    return `${count}`;
  }
  return count < 1e6 ? `${Math.round(count / 1000)}k` : `${Math.round(count / 1e6)}M`;
};
var distance = (a, b) => {
  if (Math.abs(a.length - b.length) > 1) {
    return 2;
  }
  const rows = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 0;j <= b.length; j += 1) {
    rows[0][j] = j;
  }
  for (let i = 1;i <= a.length; i += 1) {
    for (let j = 1;j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      const row = rows[i];
      const above = rows[i - 1];
      row[j] = Math.min((above[j] ?? 0) + 1, (row[j - 1] ?? 0) + 1, (above[j - 1] ?? 0) + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        row[j] = Math.min(row[j] ?? 0, (rows[i - 2][j - 2] ?? 0) + 1);
      }
    }
  }
  return rows[a.length][b.length] ?? 2;
};
var squashed = (name) => name.replace(/[-_.]/g, "");
var lookalike = (ecosystem, name) => {
  const known = POPULAR[ecosystem];
  const bare = name.startsWith("@") ? name.slice(name.indexOf("/") + 1) : name;
  if (known.includes(name) || bare.length < 4) {
    return null;
  }
  return known.find((one) => one !== bare && squashed(one) === squashed(bare)) ?? known.find((one) => one.length >= 4 && one !== bare && distance(one, bare) === 1) ?? null;
};
var assess = (request, facts, thresholds, now) => {
  const registry = REGISTRY[request.ecosystem];
  if (!facts.isChecked) {
    return [{ kind: "unchecked", label: "Not checked", level: thresholds.holdsUnchecked ? "risk" : "note", text: `${registry} could not be reached, so it was not checked` }];
  }
  const near = lookalike(request.ecosystem, request.name);
  if (!facts.isFound) {
    const hint = near === null ? "" : `; did you mean ${near}?`;
    return [{ kind: "missing", label: "Unknown package", level: "risk", text: `not on ${registry}: the name may be made up or private${hint}`, ...near === null ? {} : { near } }];
  }
  const flags = [];
  const isEstablished = (facts.weeklyDownloads ?? 0) >= ESTABLISHED;
  if (near !== null && !isEstablished) {
    flags.push({ kind: "typosquat", label: "Possible typosquat", level: "risk", text: `looks like ${near}, which is a different package`, near });
  }
  if (facts.createdAt !== null && now - facts.createdAt < thresholds.minAgeDays * DAY) {
    flags.push({ kind: "new", label: "New package", level: "risk", text: `first published ${span(Math.max(0, now - facts.createdAt))} ago` });
  }
  if (facts.publishedAt !== null && now - facts.publishedAt < thresholds.cooldownDays * DAY) {
    const version = facts.version === null ? "this version" : `version ${facts.version}`;
    flags.push({ kind: "fresh", label: "Fresh release", level: "risk", text: `${version} is ${span(Math.max(0, now - facts.publishedAt))} old` });
  }
  if (facts.isTooNewToDate === true) {
    flags.push({ kind: "fresh", label: "Fresh release", level: "risk", text: `version ${facts.version ?? request.version} is too new to have a publish date on record yet` });
  }
  if (facts.isTooNewToDate !== true && request.version !== null && facts.version === request.version && facts.publishedAt === null && request.ecosystem !== "rubygems") {
    flags.push({
      kind: "undated",
      label: "Release date unknown",
      level: thresholds.holdsUnchecked ? "risk" : "note",
      text: `the date of version ${request.version} could not be read, so its age was not checked`
    });
  }
  if (facts.weeklyDownloads !== null && facts.weeklyDownloads < thresholds.minWeeklyDownloads) {
    flags.push({ kind: "unpopular", label: "Little used", level: "risk", text: `${compact(facts.weeklyDownloads)} downloads a week` });
  }
  if (facts.hasInstallScript) {
    flags.push({ kind: "script", label: "Install script", level: "note", text: "runs a script of its own when installed" });
  }
  if (facts.isSourceOnly) {
    flags.push({ kind: "source-only", label: "Source only", level: "note", text: "ships source only, so installing runs its build code" });
  }
  if (facts.isDeprecated) {
    flags.push({ kind: "deprecated", label: "Deprecated", level: "note", text: "its author has withdrawn it" });
  }
  return flags;
};
var summary = (request, facts, now) => {
  const parts = [facts.version === null ? request.name : `${request.name} ${facts.version}`];
  if (facts.createdAt !== null) {
    parts.push(`${span(Math.max(0, now - facts.createdAt))} old`);
  }
  if (facts.weeklyDownloads !== null) {
    parts.push(`${compact(facts.weeklyDownloads)} a week`);
  }
  return parts.join(" · ");
};

// src/core/shell.ts
var WRAPPERS = new Set(["time", "command", "exec", "env", "nohup", "sudo", "caffeinate", "{", "!", "if", "then", "else", "do", "while"]);

// src/core/detect.ts
var NPM_VALUED = new Set(["--prefix", "--registry", "-w", "--workspace", "--tag", "--cache", "--userconfig", "-C", "--dir", "--filter", "-F", "--cwd"]);
var PIP_VALUED = new Set([
  "-r",
  "--requirement",
  "-c",
  "--constraint",
  "-e",
  "--editable",
  "-i",
  "--index-url",
  "--extra-index-url",
  "-t",
  "--target",
  "--python",
  "-p",
  "-f",
  "--find-links",
  "--prefix",
  "--root",
  "--group",
  "--extra",
  "--optional",
  "--index",
  "--platform",
  "--python-version",
  "--implementation",
  "--abi",
  "--src",
  "--upgrade-strategy",
  "--config-settings",
  "--cache-dir",
  "--directory",
  "--project"
]);
var CARGO_VALUED = new Set([
  "--features",
  "-F",
  "--rename",
  "--package",
  "-p",
  "--manifest-path",
  "--registry",
  "--branch",
  "--tag",
  "--rev",
  "--version",
  "--vers",
  "--root",
  "--bin",
  "--example",
  "--profile",
  "--target",
  "--target-dir",
  "--index",
  "-j",
  "--jobs",
  "--config",
  "-Z"
]);
var GEM_VALUED = new Set(["-v", "--version", "-i", "--install-dir", "-n", "--bindir", "-P", "--trust-policy", "--platform", "-g", "--file"]);
var NPX = { ecosystem: "npm", valued: new Set([...NPM_VALUED, "-c", "--call"]), naming: new Set(["-p", "--package"]), isExecuted: true, isFirstOnly: true };
var UVX = { ecosystem: "pypi", valued: PIP_VALUED, naming: new Set(["--from", "--with"]), isExecuted: true, isFirstOnly: true };
var CARGO = { ecosystem: "crates", valued: CARGO_VALUED, local: new Set(["--path", "--git"]) };
var GEM = { ecosystem: "rubygems", valued: GEM_VALUED, local: new Set(["--local", "-l"]) };
var NEVER_FETCHES = new Set(["--no-install", "--no", "--offline", "--dry-run", "--help", "-h"]);
var NPM_NAME = /^(?:@[a-z0-9~-][a-z0-9._~-]*\/)?[a-z0-9~-][a-z0-9._~-]*$/i;
var NPM_REMOTE = /^(?:git\+|git:|git@|https?:|github:|gitlab:|bitbucket:|gist:)/i;
var NPM_SHORTHAND = /^[\w.-]+\/[\w.-]+(?:#.+)?$/;
var LOCAL = /^(?:\.|\/|~|file:|link:|workspace:|portal:|[A-Za-z]:[\\/])/;
var ARCHIVE = /\.(?:whl|tar\.gz|tgz|zip|gem|crate)$/i;
var PYPI_SPEC = /^([A-Za-z0-9](?:[A-Za-z0-9._-]*[A-Za-z0-9])?)(?:\[[^\]]*\])?\s*(?:(===?|~=|>=|<=|!=|>|<)\s*([^,;\s]+))?/;
var PLAIN_NAME = /^[A-Za-z0-9][A-Za-z0-9._-]*$/;
var INTERPRETER = String.raw`(?:(?:ba|z|da|k|fi)?sh|python[\d.]*|node|perl|ruby)\b`;
var PIPED = new RegExp(String.raw`\b(?:curl|wget)\b[^|;&\n]*\|\s*(?:sudo\s+(?:-\S+\s+)*)?${INTERPRETER}`);
var SUBSTITUTED = new RegExp(String.raw`\b(?:${INTERPRETER}\s+(?:-\w+\s+)*<\(\s*|${INTERPRETER}\s+-c\s+["']?\$\(\s*|eval\s+["']?\$\(\s*)(?:curl|wget)\b`);
var PUBLIC_HOSTS = new Set(["registry.npmjs.org", "pypi.org", "crates.io", "rubygems.org"]);
var npmSpec = (spec, via, isExecuted) => {
  if (LOCAL.test(spec) || ARCHIVE.test(spec)) {
    return null;
  }
  if (NPM_REMOTE.test(spec) || !spec.startsWith("@") && NPM_SHORTHAND.test(spec)) {
    return { kind: "remote-source", detail: spec, via };
  }
  const real = spec.includes("@npm:") ? spec.slice(spec.indexOf("@npm:") + 5) : spec;
  const at = real.lastIndexOf("@");
  const name = at > 0 ? real.slice(0, at) : real;
  const version = at > 0 ? real.slice(at + 1) : null;
  return NPM_NAME.test(name) ? { ecosystem: "npm", name: name.toLowerCase(), version: version !== null && /^\d/.test(version) ? version : null, via, isExecuted } : null;
};
var pypiSpec = (spec, via, isExecuted) => {
  if (LOCAL.test(spec) || ARCHIVE.test(spec)) {
    return null;
  }
  if (/^(?:git\+|hg\+|svn\+|bzr\+|https?:)/i.test(spec) || /\s@\s|@(?:git\+|https?:)/.test(spec)) {
    return { kind: "remote-source", detail: spec, via };
  }
  const found = PYPI_SPEC.exec(spec);
  const pinned = /^([A-Za-z0-9][A-Za-z0-9._-]*)@(\d[^\s]*)$/.exec(spec);
  const name = pinned?.[1] ?? found?.[1];
  if (name === undefined) {
    return null;
  }
  return {
    ecosystem: "pypi",
    name: name.toLowerCase().replace(/[-_.]+/g, "-"),
    version: pinned?.[2] ?? (found?.[2] === "==" ? found[3] ?? null : null),
    via,
    isExecuted
  };
};
var plainSpec = (ecosystem) => (spec, via, isExecuted) => {
  if (LOCAL.test(spec) || ARCHIVE.test(spec)) {
    return null;
  }
  const [name = "", version] = spec.split("@");
  return PLAIN_NAME.test(name) ? { ecosystem, name: name.toLowerCase(), version: version !== undefined && /^\d/.test(version) ? version : null, via, isExecuted } : null;
};
var SPEC = { npm: npmSpec, pypi: pypiSpec, crates: plainSpec("crates"), rubygems: plainSpec("rubygems") };
var SHELLS = new Set(["sh", "bash", "zsh", "dash", "ksh", "fish"]);
var VALUED_BEFORE_VERB = new Set([...NPM_VALUED, ...CARGO_VALUED, "--python", "--directory", "--project", "--cache-dir", "--color", "--config-file"]);

// src/core/registry.ts
var SMALL_PACKAGE = 1e4;
var UNCHECKED = {
  isChecked: false,
  isFound: false,
  version: null,
  createdAt: null,
  publishedAt: null,
  weeklyDownloads: null,
  hasInstallScript: false,
  isDeprecated: false,
  isSourceOnly: false
};
var MISSING = { ...UNCHECKED, isChecked: true };
var json = (text) => {
  try {
    const parsed = JSON.parse(text ?? "");
    return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed) ? parsed : null;
  } catch {
    return null;
  }
};
var record = (value) => typeof value === "object" && value !== null && !Array.isArray(value) ? value : {};
var list = (value) => Array.isArray(value) ? value.map(record) : [];
var text = (value) => typeof value === "string" && value !== "" ? value : null;
var count = (value) => typeof value === "number" && Number.isFinite(value) ? value : null;
var time = (value) => {
  const at = typeof value === "string" ? Date.parse(value) : Number.NaN;
  return Number.isNaN(at) ? null : at;
};
var earliest = (times) => {
  const known = times.filter((one) => one !== null);
  return known.length === 0 ? null : Math.min(...known);
};
var npm = async (get, request) => {
  const name = request.name.replace("/", "%2F");
  const [asked, downloads] = await Promise.all([
    get(`https://registry.npmjs.org/${name}/${request.version ?? "latest"}`),
    get(`https://api.npmjs.org/downloads/point/last-week/${request.name}`)
  ]);
  if (asked === null) {
    return UNCHECKED;
  }
  const found = asked.status === 404 && request.version !== null ? await get(`https://registry.npmjs.org/${name}/latest`) : asked;
  if (found === null || found.status !== 200 && found.status !== 404) {
    return UNCHECKED;
  }
  const manifest = found.status === 200 ? json(found.text) : null;
  if (manifest === null) {
    return MISSING;
  }
  const scripts = record(manifest.scripts);
  const version = text(manifest.version);
  const weeklyDownloads = downloads?.status === 200 ? count(json(downloads.text)?.downloads) : null;
  let createdAt = null;
  let publishedAt = null;
  let isTooNewToDate = false;
  if (weeklyDownloads === null || weeklyDownloads < SMALL_PACKAGE) {
    const times = record(json((await get(`https://registry.npmjs.org/${name}`))?.text)?.time);
    createdAt = time(times.created);
    publishedAt = version === null ? null : time(times[version]);
  } else if (request.version === null) {
    const hits = list(json((await get(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(request.name)}&size=5`))?.text)?.objects);
    const own = hits.map((hit) => record(hit.package)).find((one) => one.name === request.name);
    publishedAt = own?.version === version ? time(own?.date) : null;
  }
  if (request.version !== null && version === request.version && publishedAt === null) {
    const dated = await get(`https://api.deps.dev/v3/systems/npm/packages/${encodeURIComponent(request.name)}/versions/${encodeURIComponent(version)}`);
    publishedAt = dated?.status === 200 ? time(json(dated.text)?.publishedAt) : null;
    isTooNewToDate = dated?.status === 404;
  }
  return {
    isChecked: true,
    isFound: true,
    version,
    createdAt,
    publishedAt,
    weeklyDownloads,
    ...isTooNewToDate ? { isTooNewToDate } : {},
    hasInstallScript: ["preinstall", "install", "postinstall"].some((one) => text(scripts[one]) !== null),
    isDeprecated: text(manifest.deprecated) !== null,
    isSourceOnly: false
  };
};
var pypi = async (get, request) => {
  const [found, downloads] = await Promise.all([
    get(`https://pypi.org/pypi/${request.name}/json`),
    get(`https://pypistats.org/api/packages/${request.name}/recent`)
  ]);
  if (found === null || found.status !== 200 && found.status !== 404) {
    return UNCHECKED;
  }
  const body = found.status === 200 ? json(found.text) : null;
  if (body === null) {
    return MISSING;
  }
  const releases = record(body.releases);
  const version = request.version ?? text(record(body.info).version);
  const files = version === null ? [] : list(releases[version]);
  return {
    isChecked: true,
    isFound: true,
    version,
    createdAt: earliest(Object.values(releases).flatMap((release) => list(release).map((file) => time(file.upload_time_iso_8601)))),
    publishedAt: earliest(files.map((file) => time(file.upload_time_iso_8601))),
    weeklyDownloads: downloads?.status === 200 ? count(record(json(downloads.text)?.data).last_week) : null,
    hasInstallScript: false,
    isDeprecated: files.length > 0 && files.every((file) => file.yanked === true),
    isSourceOnly: files.length > 0 && files.every((file) => file.packagetype === "sdist")
  };
};
var crates = async (get, request) => {
  const found = await get(`https://crates.io/api/v1/crates/${request.name}`);
  if (found === null || found.status !== 200 && found.status !== 404) {
    return UNCHECKED;
  }
  const body = found.status === 200 ? json(found.text) : null;
  if (body === null) {
    return MISSING;
  }
  const crate = record(body.crate);
  const version = request.version ?? text(crate.max_stable_version) ?? text(crate.newest_version);
  const published = list(body.versions).find((one) => one.num === version);
  const recent = count(crate.recent_downloads);
  return {
    isChecked: true,
    isFound: true,
    version,
    createdAt: time(crate.created_at),
    publishedAt: time(published?.created_at),
    weeklyDownloads: recent === null ? null : Math.round(recent / 13),
    hasInstallScript: false,
    isDeprecated: published?.yanked === true,
    isSourceOnly: false
  };
};
var rubygems = async (get, request) => {
  const [found, versions] = await Promise.all([
    get(`https://rubygems.org/api/v1/gems/${request.name}.json`),
    get(`https://rubygems.org/api/v1/versions/${request.name}.json`)
  ]);
  if (found === null || found.status !== 200 && found.status !== 404) {
    return UNCHECKED;
  }
  const body = found.status === 200 ? json(found.text) : null;
  if (body === null) {
    return MISSING;
  }
  let history = [];
  try {
    history = versions?.status === 200 ? list(JSON.parse(versions.text)) : [];
  } catch {
    history = [];
  }
  const version = request.version ?? text(body.version);
  return {
    isChecked: true,
    isFound: true,
    version,
    createdAt: earliest(history.map((one) => time(one.created_at))),
    publishedAt: time(history.find((one) => one.number === version)?.created_at) ?? (request.version === null ? time(body.version_created_at) : null),
    weeklyDownloads: null,
    hasInstallScript: false,
    isDeprecated: false,
    isSourceOnly: false
  };
};
var REGISTRY2 = { npm, pypi, crates, rubygems };
var lookup = async (get, request) => {
  try {
    return await REGISTRY2[request.ecosystem](get, request);
  } catch {
    return UNCHECKED;
  }
};

// src/guard.ts
var DEFAULTS = { hold: "flagged", sensitivity: "balanced", unreachable: "allow", onHold: "ask" };
var SENSITIVITY = {
  relaxed: { minAgeDays: 7, cooldownDays: 1, minWeeklyDownloads: 100 },
  balanced: { minAgeDays: 30, cooldownDays: 3, minWeeklyDownloads: 1000 },
  strict: { minAgeDays: 90, cooldownDays: 7, minWeeklyDownloads: 1e4 }
};
var thresholdsOf = (config) => ({ ...SENSITIVITY[config.sensitivity], holdsUnchecked: config.unreachable === "hold" });
var titled = (one) => one.version === null ? one.name : `${one.name}@${one.version}`;
var check = async (world, requests, thresholds) => {
  const at = world.now();
  return Promise.all(requests.map(async (request) => {
    const facts = await lookup(world.get, request);
    const flags = assess(request, facts, thresholds, at);
    const raised = flags.map((flag) => flag.kind === "deprecated" && request.isExecuted ? { ...flag, level: "risk" } : flag);
    const near = raised.find((flag) => flag.near !== undefined)?.near;
    if (near === undefined) {
      return { ...request, facts, flags: raised, lookalike: null };
    }
    const known = await lookup(world.get, { ...request, name: near, version: null });
    const weekly = known.isFound ? known.weeklyDownloads : null;
    const used = weekly === null ? "" : ` (${compact(weekly)} downloads a week)`;
    return {
      ...request,
      facts,
      flags: raised.map((flag) => flag.kind === "typosquat" ? { ...flag, text: `looks like ${near}${used}, which is a different package` } : flag),
      lookalike: { name: near, weeklyDownloads: weekly }
    };
  }));
};
var describe = (one, at) => {
  const head = `${one.facts.isFound ? summary(one, one.facts, at) : titled(one)} (${registryName(one.ecosystem)})`;
  const flags = one.flags.length === 0 ? ["nothing flagged"] : one.flags.map((flag) => `${flag.level === "risk" ? "!" : "·"} ${flag.label}: ${flag.text}`);
  return [head, ...flags.map((line) => `  ${line}`)].join(`
`);
};

// src/state.ts
import { appendFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";
var home = () => join(process.env.COPILOT_HOME ?? join(homedir(), ".copilot"), "installguard");
var ALLOWED = "allowed.json";
var CONFIG = "config.json";
var LOG = "log.jsonl";
var USER_AGENT = "installguard-copilot (https://github.com/griches/installguard-copilot)";
var HOSTS = ["registry.npmjs.org", "api.npmjs.org", "pypi.org", "pypistats.org", "crates.io", "rubygems.org", "api.deps.dev"];
var REQUEST_MS = 6000;
var BUDGET_MS = 20000;
var text2 = (path) => readFile(path, "utf8").catch(() => "");
var oneOf = (value, options, fallback) => options.find((one) => one === value) ?? fallback;
var readAllowed = async () => {
  try {
    const kept = JSON.parse(await text2(join(home(), ALLOWED)));
    return Array.isArray(kept) ? kept.filter((one) => typeof one === "string") : [];
  } catch {
    return [];
  }
};
var writeAllowed = async (keys) => {
  await mkdir(home(), { recursive: true });
  await writeFile(join(home(), ALLOWED), `${JSON.stringify([...new Set(keys)].sort(), null, 2)}
`);
};
var forgetAllowed = () => rm(join(home(), ALLOWED), { force: true });
var readConfig = async () => {
  let kept = {};
  try {
    kept = JSON.parse(await text2(join(home(), CONFIG)));
  } catch {}
  return {
    hold: oneOf(kept.hold, ["flagged", "always"], DEFAULTS.hold),
    sensitivity: oneOf(kept.sensitivity, ["relaxed", "balanced", "strict"], DEFAULTS.sensitivity),
    unreachable: oneOf(kept.unreachable, ["allow", "hold"], DEFAULTS.unreachable),
    onHold: oneOf(kept.onHold, ["ask", "deny"], DEFAULTS.onHold)
  };
};
var readLog = async () => (await text2(join(home(), LOG))).split(`
`).filter((line) => line !== "").flatMap((line) => {
  try {
    return [JSON.parse(line)];
  } catch {
    return [];
  }
});
var get = async (url) => {
  try {
    if (!HOSTS.includes(new URL(url).host)) {
      return null;
    }
    const answered = await fetch(url, { headers: { "user-agent": USER_AGENT, accept: "application/json" }, signal: AbortSignal.timeout(REQUEST_MS) });
    return { status: answered.status, text: await answered.text() };
  } catch {
    return null;
  }
};
var world = () => ({
  get,
  now: () => Date.now(),
  read: text2,
  exists: (path) => readFile(path).then(() => true, () => false),
  allowed: readAllowed,
  deadline: () => new Promise((resolve) => setTimeout(resolve, BUDGET_MS).unref())
});

// src/cli.ts
var ECOSYSTEMS = ["npm", "pypi", "crates", "rubygems"];
var PACKAGE_NAME = /^(?:@[a-z0-9~-][a-z0-9._~-]*\/)?[a-z0-9~-][a-z0-9._~-]*$/i;
var SHOWN_ENTRIES = 8;
var USAGE = `Install Guard
  check <name>   look a package up (npm by default; pypi:<name>, crates:<name>, rubygems:<name>)
  allow <name>   always allow a package
  forget         clear the allowed list
  log            show what was checked lately`;
var main = async () => {
  const [verb = "log", ...rest] = process.argv.slice(2);
  const named = rest.join(" ").trim();
  const [prefix, bare] = named.includes(":") ? [named.slice(0, named.indexOf(":")), named.slice(named.indexOf(":") + 1)] : ["npm", named];
  const ecosystem = ECOSYSTEMS.find((one) => one === prefix) ?? "npm";
  if (verb === "forget") {
    await forgetAllowed();
    return "Install Guard: the allowed list is empty again.";
  }
  if (verb === "allow" || verb === "check") {
    if (bare === "") {
      return `Install Guard: name a package, as in "${verb} left-pad" or "${verb} pypi:requests".`;
    }
    if (!PACKAGE_NAME.test(bare)) {
      return `Install Guard: "${bare.slice(0, 80)}" is not a package name.`;
    }
  }
  if (verb === "allow") {
    await writeAllowed([...await readAllowed(), `${ecosystem}:${bare.toLowerCase()}`]);
    return `Install Guard: ${bare} (${registryName(ecosystem)}) is always allowed from now on.`;
  }
  if (verb === "check") {
    const [one] = await check(world(), [{ ecosystem, name: bare.toLowerCase(), version: null, via: "check", isExecuted: false }], thresholdsOf(await readConfig()));
    return one === undefined ? "Install Guard: nothing to check." : describe(one, Date.now());
  }
  if (verb !== "log") {
    return USAGE;
  }
  const entries = (await readLog()).slice(-SHOWN_ENTRIES).reverse();
  const always = await readAllowed();
  const shown = entries.flatMap((entry) => [`${entry.outcome === "held" ? "! held" : "✓ nothing flagged"}  $ ${entry.command}`, ...entry.lines.flatMap((line) => line.split(`
`)).map((line) => `    ${line}`), ""]);
  return [
    ...entries.length === 0 ? ["Nothing checked yet.", ""] : shown,
    always.length === 0 ? "No package is always allowed." : `Always allowed: ${always.map((one) => one.slice(one.indexOf(":") + 1)).join(", ")}`
  ].join(`
`);
};
main().then((said) => console.log(said), () => console.log("Install Guard: that did not work."));
