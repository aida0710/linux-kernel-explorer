---
sidebar_position: 8
---
# rwtop-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/rwtop-record`

### コンテンツ

```txt
#!/bin/bash
perf record -e syscalls:sys_enter_read -e syscalls:sys_exit_read -e syscalls:sys_enter_write -e syscalls:sys_exit_write $@

```
