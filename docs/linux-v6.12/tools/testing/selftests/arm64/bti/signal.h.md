---
sidebar_position: 6
---
# signal.h

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/arm64/bti/signal.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright (C) 2019  Arm Limited
 * Original author: Dave Martin <Dave.Martin@arm.com>
 */

#ifndef SIGNAL_H
#define SIGNAL_H

#include <linux/signal.h>

#include "system.h"

typedef __sighandler_t sighandler_t;

int sigemptyset(sigset_t *s);
int sigaddset(sigset_t *s, int n);
int sigaction(int n, struct sigaction *sa, const struct sigaction *old);
int sigprocmask(int how, const sigset_t *mask, sigset_t *old);

#endif /* ! SIGNAL_H */

```
