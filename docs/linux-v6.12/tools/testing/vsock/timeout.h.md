---
sidebar_position: 9
---
# timeout.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/vsock/timeout.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#ifndef TIMEOUT_H
#define TIMEOUT_H

enum {
	/* Default timeout */
	TIMEOUT = 10 /* seconds */
};

void sigalrm(int signo);
void timeout_begin(unsigned int seconds);
void timeout_check(const char *operation);
void timeout_end(void);

#endif /* TIMEOUT_H */

```
