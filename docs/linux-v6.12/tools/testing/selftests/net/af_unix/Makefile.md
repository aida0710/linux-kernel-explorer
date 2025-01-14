---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/net/af_unix/Makefile`

### コンテンツ

```txt
CFLAGS += $(KHDR_INCLUDES)
TEST_GEN_PROGS := diag_uid msg_oob scm_pidfd scm_rights unix_connect

include ../../lib.mk

```
