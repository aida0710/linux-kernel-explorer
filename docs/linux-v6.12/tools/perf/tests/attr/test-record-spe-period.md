---
sidebar_position: 34
---
# test-record-spe-period

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-spe-period`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event -c 2 -e arm_spe_0// -- kill >/dev/null 2>&1
ret     = 1
arch    = aarch64

[event-10:base-record-spe]
sample_period=2
freq=0

# dummy event
[event-1:base-record-spe]

```
