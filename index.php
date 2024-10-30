<?php

	// algo trouver la valeur maximum dans une liste
//	$tab = [12, 3, 9, 50, 320, 125, 1];
//	function maximum($liste) {
//		$max_actuel = 0;
//		foreach ($liste as $elem)
//			if ($elem > $max_actuel)
//				$max_actuel = $elem;
//		return $max_actuel;
//	}
//	echo maximum($tab);
	/*
	 * Complexité en temps
	 */
	/* Pour une liste de N éléments, on effectue N comparaisons : une par élément, avec le maximum actuel.
	La complexité de l'algorithme est donc en O(N) : il s'effectue en temps linéaire */
	
	/*
	 * Complexité mémoire
	 */
	/* L'algorithme utilise une liste d'éléments, qui occupe sans doute de la place en mémoire.
	Cependant, cette liste existait déjà avant qu'on en cherche le plus grand élément, et n'a pas été allouée
	par notre algorithme : on ne la prend pas en compte pour la mesure de la complexité mémoire
	(on ne compte que la mémoire directement réclamée par l'algorithme). Celui-ci n'effectue pratiquement aucune
	allocation, au pire une variable temporaire, pour stocker le maximum actuel. Cet espace mémoire ne dépend pas
	de la longueur de la liste : l'occupation mémoire de notre algorithme est constante (on note aussi O(1),
	pour dire que ça ne dépend pas de N) */
	
	// on peut ameliorer cet alogo car si le tableau est vide il n'est pas interreseaant de reourner la valeur 0
	// nous allons donc retouner une erreur si le tableau est vide et nous allons initialiuser la variable max_actuel a la
	// valeur du premier element du tableau. ainsi on peut se substituer de la premiere comparaison.
	
//	$tab1 = [];
//	function maximum($liste) {
//		$i = 0;
//		if (sizeof($liste) === 0) return new Exception();
//		else $max_actuel = $liste[0];
//		foreach ($liste as $elem) {
//			if (++$i === 1) continue;
//			if ($elem > $max_actuel)
//				$max_actuel = $elem;
//		}
//		return $max_actuel;
//	}
//	echo maximum($tab1);
	
	/*
	 * Ce nouvel algorithme effectue N-1 comparaisons (vu qu'on ne compare pas le premier élément à lui-même).
	 * Cependant, cela ne change pas la complexité : la différence de temps entre N et N-1 comparaisons ne dépend
	 * pas de N, elle est constante. On peut donc la négliger (pour des listes un peu grandes, cela ne fera aucune
	 * différence) : les deux algorithmes ont la même complexité, ils sont linéaires (c'est-à-dire en O(N)).
	 * Enfin, on peut remarquer que le deuxième algorithme marche aussi pour des nombres négatifs (alors que si la
	 * liste ne contient que des nombres strictement négatifs, le premier algorithme renvoie 0, ce qui est faux).
	 * Il est donc plus général, et sans doute préférable
	 */
	
	/*
	 * Algo trouver les elements unique
	 */
	
//	$tab = [2, 89, 7, 5, 89, 7, 49, 2];
//	$uniques = [];
//
//	function findUnique($liste) {
//		$isUnique = true;
//		$i = 0;
//		$uniques[0] = $liste[0];
//		foreach ($liste as $item) {
//			if (++$i === 1) continue;
//			foreach ($uniques as $unique) {
//				if ($item === $unique) $isUnique = false;
//			}
//			if ($isUnique) array_push($uniques, $item);
//			$isUnique = true;
//		}
//		return $uniques;
//	}
//	$result = findUnique($tab);
//	foreach ($result as $item3) {
//		echo $item3."</br>";
//	}
	
	/*
	 * Algo tri par insertion
	 */
	$tabTruc = [2, 250, 89, 7, 104, 49];
	function insertionTab($tab, $insertion) {
		$j = 0;
		for ($j = sizeof($tab); $j > 0 && $tab[$j - 1] > $insertion; $j--) {
			$tab[$j] = $tab[$j - 1];
		}
		$tab[$j] = $insertion;
	}
//	insertionTab($tabTruc, 88);
	
	
	function tri_insertion(&$tab) {
		$i = 0;
		$j = 0;
        for($i = 1; $i < sizeof($tab); $i++) {
	        $elem = $tab[$i];
	        for ($j = $i; $j > 0 && $tab[$j - 1] > $elem; $j--) {
		        $tab[$j] = $tab[$j - 1];
	        }
	        $tab[$j] = $elem;
        }
	}
	tri_insertion($tabTruc);
	foreach ($tabTruc as $item3) {
		echo $item3."</br>";
	}
	