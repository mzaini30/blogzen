---
title: "Contoh Dependencies Pada Suatu Paket Npm"
description: "Contoh dependencies NPM"
date: "2020-04-03T08:51:29+08:00"
thumbnail: "https://authy.com/wp-content/uploads/npm-logo.png"
categories:
  - "teknologi"
---

Berikut ini adalah dependencies yang muncul di Terminal saat aku menginstall paket NPM `json-server`:

```
/usr/local/lib
└─┬ json-server@0.16.1 
  ├─┬ body-parser@1.19.0 
  │ ├── bytes@3.1.0 
  │ ├── content-type@1.0.4 
  │ ├─┬ debug@2.6.9 
  │ │ └── ms@2.0.0 
  │ ├── depd@1.1.2 
  │ ├─┬ http-errors@1.7.2 
  │ │ ├── inherits@2.0.3 
  │ │ └── toidentifier@1.0.0 
  │ ├─┬ iconv-lite@0.4.24 
  │ │ └── safer-buffer@2.1.2 
  │ ├─┬ on-finished@2.3.0 
  │ │ └── ee-first@1.1.1 
  │ ├── qs@6.7.0 
  │ ├─┬ raw-body@2.4.0 
  │ │ └── unpipe@1.0.0 
  │ └─┬ type-is@1.6.18 
  │   └── media-typer@0.3.0 
  ├─┬ chalk@3.0.0 
  │ ├─┬ ansi-styles@4.2.1 
  │ │ ├── @types/color-name@1.1.1 
  │ │ └─┬ color-convert@2.0.1 
  │ │   └── color-name@1.1.4 
  │ └─┬ supports-color@7.1.0 
  │   └── has-flag@4.0.0 
  ├─┬ compression@1.7.4 
  │ ├─┬ accepts@1.3.7 
  │ │ └── negotiator@0.6.2 
  │ ├── bytes@3.0.0 
  │ ├─┬ compressible@2.0.18 
  │ │ └── mime-db@1.43.0 
  │ ├── on-headers@1.0.2 
  │ ├── safe-buffer@5.1.2 
  │ └── vary@1.1.2 
  ├── connect-pause@0.1.1 
  ├─┬ cors@2.8.5 
  │ └── object-assign@4.1.1 
  ├─┬ errorhandler@1.5.1 
  │ └── escape-html@1.0.3 
  ├─┬ express@4.17.1 
  │ ├── array-flatten@1.1.1 
  │ ├── content-disposition@0.5.3 
  │ ├── cookie@0.4.0 
  │ ├── cookie-signature@1.0.6 
  │ ├── encodeurl@1.0.2 
  │ ├── etag@1.8.1 
  │ ├── finalhandler@1.1.2 
  │ ├── fresh@0.5.2 
  │ ├── merge-descriptors@1.0.1 
  │ ├── methods@1.1.2 
  │ ├── parseurl@1.3.3 
  │ ├── path-to-regexp@0.1.7 
  │ ├─┬ proxy-addr@2.0.6 
  │ │ ├── forwarded@0.1.2 
  │ │ └── ipaddr.js@1.9.1 
  │ ├── range-parser@1.2.1 
  │ ├─┬ send@0.17.1 
  │ │ ├── destroy@1.0.4 
  │ │ ├── mime@1.6.0 
  │ │ └── ms@2.1.1 
  │ ├── serve-static@1.14.1 
  │ ├── setprototypeof@1.1.1 
  │ ├── statuses@1.5.0 
  │ └── utils-merge@1.0.1 
  ├─┬ express-urlrewrite@1.2.0 
  │ └─┬ path-to-regexp@1.8.0 
  │   └── isarray@0.0.1 
  ├─┬ json-parse-helpfulerror@1.0.3 
  │ └── jju@1.4.0 
  ├── lodash@4.17.15 
  ├── lodash-id@0.14.0 
  ├─┬ lowdb@1.0.0 
  │ ├── graceful-fs@4.2.3 
  │ ├── is-promise@2.1.0 
  │ ├── pify@3.0.0 
  │ └── steno@0.4.4 
  ├─┬ method-override@3.0.0 
  │ └── debug@3.1.0 
  ├─┬ morgan@1.10.0 
  │ ├── basic-auth@2.0.1 
  │ └── depd@2.0.0 
  ├── nanoid@2.1.11 
  ├─┬ please-upgrade-node@3.2.0 
  │ └── semver-compare@1.0.0 
  ├── pluralize@8.0.0 
  ├─┬ request@2.88.2 
  │ ├── aws-sign2@0.7.0 
  │ ├── aws4@1.9.1 
  │ ├── caseless@0.12.0 
  │ ├─┬ combined-stream@1.0.8 
  │ │ └── delayed-stream@1.0.0 
  │ ├── extend@3.0.2 
  │ ├── forever-agent@0.6.1 
  │ ├─┬ form-data@2.3.3 
  │ │ └── asynckit@0.4.0 
  │ ├─┬ har-validator@5.1.3 
  │ │ ├─┬ ajv@6.12.0 
  │ │ │ ├── fast-deep-equal@3.1.1 
  │ │ │ ├── fast-json-stable-stringify@2.1.0 
  │ │ │ ├── json-schema-traverse@0.4.1 
  │ │ │ └── uri-js@4.2.2 
  │ │ └── har-schema@2.0.0 
  │ ├─┬ http-signature@1.2.0 
  │ │ ├── assert-plus@1.0.0 
  │ │ ├─┬ jsprim@1.4.1 
  │ │ │ ├── extsprintf@1.3.0 
  │ │ │ ├── json-schema@0.2.3 
  │ │ │ └─┬ verror@1.10.0 
  │ │ │   └── core-util-is@1.0.2 
  │ │ └─┬ sshpk@1.16.1 
  │ │   ├── asn1@0.2.4 
  │ │   ├── bcrypt-pbkdf@1.0.2 
  │ │   ├── dashdash@1.14.1 
  │ │   ├── ecc-jsbn@0.1.2 
  │ │   ├── getpass@0.1.7 
  │ │   ├── jsbn@0.1.1 
  │ │   └── tweetnacl@0.14.5 
  │ ├── is-typedarray@1.0.0 
  │ ├── isstream@0.1.2 
  │ ├── json-stringify-safe@5.0.1 
  │ ├── mime-types@2.1.26 
  │ ├── oauth-sign@0.9.0 
  │ ├── performance-now@2.1.0 
  │ ├── qs@6.5.2 
  │ ├─┬ tough-cookie@2.5.0 
  │ │ ├── psl@1.8.0 
  │ │ └── punycode@2.1.1 
  │ ├── tunnel-agent@0.6.0 
  │ └── uuid@3.4.0 
  ├── server-destroy@1.0.1 
  ├─┬ update-notifier@4.1.0 
  │ ├─┬ boxen@4.2.0 
  │ │ ├─┬ ansi-align@3.0.0 
  │ │ │ └─┬ string-width@3.1.0 
  │ │ │   ├── emoji-regex@7.0.3 
  │ │ │   ├── is-fullwidth-code-point@2.0.0 
  │ │ │   └─┬ strip-ansi@5.2.0 
  │ │ │     └── ansi-regex@4.1.0 
  │ │ ├── camelcase@5.3.1 
  │ │ ├── cli-boxes@2.2.0 
  │ │ ├── term-size@2.2.0 
  │ │ ├── type-fest@0.8.1 
  │ │ └── widest-line@3.1.0 
  │ ├─┬ configstore@5.0.1 
  │ │ ├─┬ dot-prop@5.2.0 
  │ │ │ └── is-obj@2.0.0 
  │ │ ├── make-dir@3.0.2 
  │ │ ├─┬ unique-string@2.0.0 
  │ │ │ └── crypto-random-string@2.0.0 
  │ │ └─┬ write-file-atomic@3.0.3 
  │ │   ├── imurmurhash@0.1.4 
  │ │   ├── signal-exit@3.0.3 
  │ │   └── typedarray-to-buffer@3.1.5 
  │ ├── has-yarn@2.1.0 
  │ ├── import-lazy@2.1.0 
  │ ├─┬ is-ci@2.0.0 
  │ │ └── ci-info@2.0.0 
  │ ├─┬ is-installed-globally@0.3.1 
  │ │ ├─┬ global-dirs@2.0.1 
  │ │ │ └── ini@1.3.5 
  │ │ └── is-path-inside@3.0.2 
  │ ├── is-npm@4.0.0 
  │ ├── is-yarn-global@0.3.0 
  │ ├─┬ latest-version@5.1.0 
  │ │ └─┬ package-json@6.5.0 
  │ │   ├─┬ got@9.6.0 
  │ │   │ ├── @sindresorhus/is@0.14.0 
  │ │   │ ├─┬ @szmarczak/http-timer@1.1.2 
  │ │   │ │ └── defer-to-connect@1.1.3 
  │ │   │ ├─┬ cacheable-request@6.1.0 
  │ │   │ │ ├── clone-response@1.0.2 
  │ │   │ │ ├── get-stream@5.1.0 
  │ │   │ │ ├── http-cache-semantics@4.1.0 
  │ │   │ │ ├─┬ keyv@3.1.0 
  │ │   │ │ │ └── json-buffer@3.0.0 
  │ │   │ │ ├── lowercase-keys@2.0.0 
  │ │   │ │ ├── normalize-url@4.5.0 
  │ │   │ │ └── responselike@1.0.2 
  │ │   │ ├── decompress-response@3.3.0 
  │ │   │ ├── duplexer3@0.1.4 
  │ │   │ ├─┬ get-stream@4.1.0 
  │ │   │ │ └─┬ pump@3.0.0 
  │ │   │ │   ├── end-of-stream@1.4.4 
  │ │   │ │   └─┬ once@1.4.0 
  │ │   │ │     └── wrappy@1.0.2 
  │ │   │ ├── lowercase-keys@1.0.1 
  │ │   │ ├── mimic-response@1.0.1 
  │ │   │ ├── p-cancelable@1.1.0 
  │ │   │ ├── to-readable-stream@1.0.0 
  │ │   │ └─┬ url-parse-lax@3.0.0 
  │ │   │   └── prepend-http@2.0.0 
  │ │   ├─┬ registry-auth-token@4.1.1 
  │ │   │ └─┬ rc@1.2.8 
  │ │   │   ├── deep-extend@0.6.0 
  │ │   │   ├── minimist@1.2.5 
  │ │   │   └── strip-json-comments@2.0.1 
  │ │   └── registry-url@5.1.0 
  │ ├─┬ pupa@2.0.1 
  │ │ └── escape-goat@2.1.1 
  │ ├─┬ semver-diff@3.1.1 
  │ │ └── semver@6.3.0 
  │ └── xdg-basedir@4.0.0 
  └─┬ yargs@15.3.1 
    ├─┬ cliui@6.0.0 
    │ ├─┬ strip-ansi@6.0.0 
    │ │ └── ansi-regex@5.0.0 
    │ └─┬ wrap-ansi@6.2.0 
    │   └─┬ strip-ansi@6.0.0 
    │     └── ansi-regex@5.0.0 
    ├── decamelize@1.2.0 
    ├─┬ find-up@4.1.0 
    │ ├─┬ locate-path@5.0.0 
    │ │ └─┬ p-locate@4.1.0 
    │ │   └─┬ p-limit@2.2.2 
    │ │     └── p-try@2.2.0 
    │ └── path-exists@4.0.0 
    ├── get-caller-file@2.0.5 
    ├── require-directory@2.1.1 
    ├── require-main-filename@2.0.0 
    ├── set-blocking@2.0.0 
    ├─┬ string-width@4.2.0 
    │ ├── emoji-regex@8.0.0 
    │ ├── is-fullwidth-code-point@3.0.0 
    │ └─┬ strip-ansi@6.0.0 
    │   └── ansi-regex@5.0.0 
    ├── which-module@2.0.0 
    ├── y18n@4.0.0 
    └── yargs-parser@18.1.2 
```