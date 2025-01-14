---
sidebar_position: 225
---
# pmu.l

### ファイル情報

- パス: `linux-v6.12/tools/perf/util/pmu.l`

### コンテンツ

```l
%option prefix="perf_pmu_"
%option reentrant
%option bison-bridge

%{
#include <stdlib.h>
#include <linux/bitops.h>
#include "pmu.h"
#include "pmu-bison.h"

char *perf_pmu_get_text(yyscan_t yyscanner);
YYSTYPE *perf_pmu_get_lval(yyscan_t yyscanner);

static int value(yyscan_t scanner, int base)
{
	YYSTYPE *yylval = perf_pmu_get_lval(scanner);
	char *text = perf_pmu_get_text(scanner);
	long num;

	errno = 0;
	num = strtoul(text, NULL, base);
	if (errno)
		return PP_ERROR;

	yylval->num = num;
	return PP_VALUE;
}

%}

num_dec         [0-9]+

%%

{num_dec}	{ return value(yyscanner, 10); }
config		{ return PP_CONFIG; }
-		{ return '-'; }
:		{ return ':'; }
,		{ return ','; }
.		{ ; }
\n		{ ; }

%%

int perf_pmu_wrap(void *scanner __maybe_unused)
{
	return 1;
}

```
