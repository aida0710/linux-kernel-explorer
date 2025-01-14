---
sidebar_position: 40
---
# test-stat-basic

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-stat-basic`

### コンテンツ

```txt
[config]
command = stat
args    = -e cycles kill >/dev/null 2>&1
ret     = 1

[event:base-stat]
optional=1

```
