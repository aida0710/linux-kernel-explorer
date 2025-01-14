---
sidebar_position: 33
---
# syscall-counts-by-pid-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/syscall-counts-by-pid-record`

### コンテンツ

```txt
#!/bin/bash
(perf record -e raw_syscalls:sys_enter $@ || \
 perf record -e syscalls:sys_enter $@) 2> /dev/null

```
