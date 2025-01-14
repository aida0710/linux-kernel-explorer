---
sidebar_position: 28
---
# test-libaio.c

### ファイル情報

- パス: `linux-v6.12/tools/build/feature/test-libaio.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <aio.h>

int main(void)
{
	struct aiocb aiocb;

	aiocb.aio_fildes  = 0;
	aiocb.aio_offset  = 0;
	aiocb.aio_buf     = 0;
	aiocb.aio_nbytes  = 0;
	aiocb.aio_reqprio = 0;
	aiocb.aio_sigevent.sigev_notify = 1 /*SIGEV_NONE*/;

	return (int)aio_return(&aiocb);
}

```
