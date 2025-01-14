---
sidebar_position: 8
---
# vmlinux.scr

### ファイル情報

- パス: `linux-v6.12/arch/parisc/boot/compressed/vmlinux.scr`

### コンテンツ

```scr
SECTIONS
{
  .rodata.compressed : {
	input_len = .;
	LONG(input_data_end - input_data) input_data = .;
	*(.data)
	output_len = . - 4; /* can be at unaligned address */
	input_data_end = .;
	}
}

```
