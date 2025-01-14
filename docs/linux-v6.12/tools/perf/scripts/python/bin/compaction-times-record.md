---
sidebar_position: 1
---
# compaction-times-record

### ファイル情報

- パス: `linux-v6.12/tools/perf/scripts/python/bin/compaction-times-record`

### コンテンツ

```txt
#!/bin/bash
perf record -e compaction:mm_compaction_begin -e compaction:mm_compaction_end -e compaction:mm_compaction_migratepages -e compaction:mm_compaction_isolate_migratepages -e compaction:mm_compaction_isolate_freepages $@

```
