---
sidebar_position: 13
---
# futex-contention-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/futex-contention-record`

### コンテンツ

```txt
#!/bin/bash
perf record -e syscalls:sys_enter_futex -e syscalls:sys_exit_futex $@

```
