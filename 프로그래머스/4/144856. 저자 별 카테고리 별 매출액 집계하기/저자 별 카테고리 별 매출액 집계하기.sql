SELECT b.AUTHOR_ID, c.AUTHOR_NAME, b.CATEGORY, SUM(a.SALES*b.PRICE)
FROM BOOK_SALES a
INNER JOIN BOOK b ON a.BOOK_ID = b.BOOK_ID
INNER JOIN AUTHOR c ON b.AUTHOR_ID = c.AUTHOR_ID
WHERE DATE_FORMAT(a.SALES_DATE, '%Y %m')='2022 01'
GROUP BY b.AUTHOR_ID, b.CATEGORY
ORDER BY b.AUTHOR_ID ASC, b.CATEGORY DESC