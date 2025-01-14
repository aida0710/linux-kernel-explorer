---
sidebar_position: 22
---
# test-record-graph-dwarf

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-graph-dwarf`

### コンテンツ

```txt
[config]
command = record
args    = --no-bpf-event --call-graph dwarf -- kill >/dev/null 2>&1
ret     = 1

[event:base-record]
sample_type=45359
exclude_callchain_user=1
sample_stack_user=8192
# TODO different for each arch, no support for that now
sample_regs_user=*
mmap_data=1

```
