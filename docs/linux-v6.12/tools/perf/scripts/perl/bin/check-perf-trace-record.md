---
sidebar_position: 1
---
# check-perf-trace-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/check-perf-trace-record`

### コンテンツ

```txt
#!/bin/bash
perf record -a -e kmem:kmalloc -e irq:softirq_entry -e kmem:kfree

```
