---
sidebar_position: 41
---
# test-stat-C0

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-stat-C0`

### コンテンツ

```txt
[config]
command = stat
args    = -e cycles -C 0 kill >/dev/null 2>&1
ret     = 1

[event:base-stat]
# events are disabled by default when attached to cpu
disabled=1
enable_on_exec=0
optional=1

```
