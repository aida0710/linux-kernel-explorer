---
sidebar_position: 29
---
# test-record-no-inherit

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-no-inherit`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -i kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_type=263
inherit=0

```
