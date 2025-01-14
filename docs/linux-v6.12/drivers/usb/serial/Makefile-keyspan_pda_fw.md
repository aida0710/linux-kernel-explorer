---
sidebar_position: 47
---
# Makefile-keyspan_pda_fw

### ファイル情報

- パス: `linux-v6.12/drivers/usb/serial/Makefile-keyspan_pda_fw`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

# some rules to handle the quirks of the 'as31' assembler, like
# insisting upon fixed suffixes for the input and output files,
# and its lack of preprocessor support

all: keyspan_pda_fw.h

%.asm: %.S
	gcc -x assembler-with-cpp -P -E -o $@ $<

%.hex: %.asm
	as31 -l $<
	mv $*.obj $@

%_fw.h: %.hex ezusb_convert.pl
	perl ezusb_convert.pl $* < $< > $@

```
