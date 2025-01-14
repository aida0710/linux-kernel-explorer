---
sidebar_position: 14
---
# test_klp-call_getpid.c

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/livepatch/test_klp-call_getpid.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (C) 2023 SUSE
 * Authors: Libor Pechacek <lpechacek@suse.cz>
 *          Marcos Paulo de Souza <mpdesouza@suse.com>
 */

#include <stdio.h>
#include <unistd.h>
#include <sys/syscall.h>
#include <sys/types.h>
#include <signal.h>

static int stop;
static int sig_int;

void hup_handler(int signum)
{
	stop = 1;
}

void int_handler(int signum)
{
	stop = 1;
	sig_int = 1;
}

int main(int argc, char *argv[])
{
	long count = 0;

	signal(SIGHUP, &hup_handler);
	signal(SIGINT, &int_handler);

	while (!stop) {
		(void)syscall(SYS_getpid);
		count++;
	}

	if (sig_int)
		printf("%ld iterations done\n", count);

	return 0;
}

```
