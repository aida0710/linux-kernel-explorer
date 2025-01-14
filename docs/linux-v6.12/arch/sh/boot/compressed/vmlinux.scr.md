---
sidebar_position: 12
---
# vmlinux.scr

### ファイル情報

- パス: `linux-v6.12/arch/sh/boot/compressed/vmlinux.scr`

### コンテンツ

```scr
SECTIONS
{
  .rodata..compressed : ALIGN(8) {
	input_len = .;
	LONG(input_data_end - input_data) input_data = .;
	*(.data)
	output_len = . - 4;
	input_data_end = .;
	}
}

```
