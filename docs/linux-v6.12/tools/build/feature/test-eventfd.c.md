---
sidebar_position: 16
---
# test-eventfd.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-eventfd.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
// Copyright (C) 2018, Red Hat Inc, Arnaldo Carvalho de Melo <acme@redhat.com>

#include <sys/eventfd.h>

int main(void)
{
	return eventfd(0, EFD_NONBLOCK);
}

```
