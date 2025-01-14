---
sidebar_position: 23
---
# net_dropmonitor-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/net_dropmonitor-record`

### コンテンツ

```txt
#!/bin/bash
perf record -e skb:kfree_skb $@

```
