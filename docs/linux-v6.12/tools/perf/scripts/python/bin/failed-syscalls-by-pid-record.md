---
sidebar_position: 9
---
# failed-syscalls-by-pid-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/failed-syscalls-by-pid-record`

### コンテンツ

```txt
#!/bin/bash
(perf record -e raw_syscalls:sys_exit $@ || \
 perf record -e syscalls:sys_exit $@) 2> /dev/null

```
