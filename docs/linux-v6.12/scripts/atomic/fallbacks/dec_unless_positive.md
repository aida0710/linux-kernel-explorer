---
sidebar_position: 9
---
# dec_unless_positive

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/dec_unless_positive`

### コンテンツ

```txt
cat <<EOF
	${int} c = raw_${atomic}_read(v);

	do {
		if (unlikely(c > 0))
			return false;
	} while (!raw_${atomic}_try_cmpxchg(v, &c, c - 1));

	return true;
EOF

```
