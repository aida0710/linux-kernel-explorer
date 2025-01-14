---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/samples/acrn/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

.PHONY: vm-sample

vm-sample: vm-sample.o payload.o
	$(CC) $^ -o $@

payload.o: payload.ld guest16.o
	$(LD) -T $< -o $@

clean:
	rm *.o vm-sample

```
