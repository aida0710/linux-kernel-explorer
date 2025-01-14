---
sidebar_position: 2
---
# config.c.in

### ファイル情報

- パス: `linux-v6.12/arch/um/kernel/config.c.in`

### コンテンツ

```in
// SPDX-License-Identifier: GPL-2.0
/*
 * Copyright (C) 2002 Jeff Dike (jdike@karaya.com)
 */

#include <stdio.h>
#include <stdlib.h>
#include <init.h>

static __initdata const char *config[] = {
"CONFIG"
};

static int __init print_config(char *line, int *add)
{
	int i;
	for (i = 0; i < sizeof(config)/sizeof(config[0]); i++)
		printf("%s", config[i]);
	exit(0);
}

__uml_setup("--showconfig", print_config,
"--showconfig\n"
"    Prints the config file that this UML binary was generated from.\n\n"
);


```
