---
sidebar_position: 32
---
# test-record-pfm-period

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-pfm-period`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -c 10000 --pfm-events=cycles:period=77777 kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_period=77777
sample_type=7
freq=0

```
