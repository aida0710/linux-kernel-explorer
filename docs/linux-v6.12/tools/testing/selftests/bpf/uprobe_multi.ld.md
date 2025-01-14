---
sidebar_position: 114
---
# uprobe_multi.ld

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/uprobe_multi.ld`

### コンテンツ

```ld
SECTIONS
{
	. = ALIGN(4096);
	.note.gnu.build-id : { *(.note.gnu.build-id) }
	. = ALIGN(4096);
}
INSERT AFTER .text;

build_id_start = ADDR(.note.gnu.build-id);
build_id_end = ADDR(.note.gnu.build-id) + SIZEOF(.note.gnu.build-id);


```
