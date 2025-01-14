---
sidebar_position: 1
---
# flags.mk

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/powerpc/flags.mk`

### コンテンツ

```mk
#This checks for any ENV variables and add those.

ifeq ($(GIT_VERSION),)
GIT_VERSION := $(shell git describe --always --long --dirty || echo "unknown")
export GIT_VERSION
endif

CFLAGS := -std=gnu99 -O2 -Wall -Werror -DGIT_VERSION='"$(GIT_VERSION)"' -I$(selfdir)/powerpc/include $(USERCFLAGS)
export CFLAGS

```
