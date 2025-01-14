---
sidebar_position: 6
---
# test-record-basic

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-basic`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event kill >/dev/null 2>&1
ret     = 1

[event:base-record]

```
