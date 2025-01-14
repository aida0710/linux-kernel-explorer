---
sidebar_position: 4
---
# vmlinux.scr

### ファイル情報

- パス: `linux-v6.12/arch/sh/boot/romimage/vmlinux.scr`

### コンテンツ

```scr
SECTIONS
{
  .text : {
	zero_page_pos = .;
	*(.data)
	end_data = .;
	}
}

```
