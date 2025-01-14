---
sidebar_position: 2
---
# failed-syscalls-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/failed-syscalls-record`

### コンテンツ

```txt
#!/bin/bash
(perf record -e raw_syscalls:sys_exit $@ || \
 perf record -e syscalls:sys_exit $@) 2> /dev/null

```
