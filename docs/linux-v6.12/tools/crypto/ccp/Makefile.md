---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/crypto/ccp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
CFLAGS += -D__EXPORTED_HEADERS__ -I../../../include/uapi -I../../../include

TARGET = dbc_library.so

all: $(TARGET)

dbc_library.so: dbc.c
	$(CC) $(CFLAGS) $(LDFLAGS) -shared -o $@ $<
	chmod -x $@

clean:
	$(RM) $(TARGET)

```
