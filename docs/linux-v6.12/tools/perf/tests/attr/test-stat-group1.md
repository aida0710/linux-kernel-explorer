---
sidebar_position: 46
---
# test-stat-group1

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-stat-group1`

### コンテンツ

```txt
[config]
command = stat
args    = -e '{cycles,instructions}' kill >/dev/null 2>&1
ret     = 1

[event-1:base-stat]
fd=1
group_fd=-1
read_format=3|15

[event-2:base-stat]
fd=2
group_fd=1
config=1
disabled=0
enable_on_exec=0
read_format=3|15

```
