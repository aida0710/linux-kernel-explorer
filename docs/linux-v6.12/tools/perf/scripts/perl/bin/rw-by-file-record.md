---
sidebar_position: 4
---
# rw-by-file-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/perl/bin/rw-by-file-record`

### コンテンツ

```txt
#!/bin/bash
perf record -e syscalls:sys_enter_read -e syscalls:sys_enter_write $@


```
